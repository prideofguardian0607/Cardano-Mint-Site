import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './App.css';
import Layout from "./Components/Layout/Layout";
import NamiWalletApi, { Cardano } from './nami-js';
import blockfrostApiKey from '../config.js'; 
let nami;


export default function App() {
    const [connected, setConnected] = useState()
    const [address, setAddress] = useState()
    const [nfts, setNfts] = useState([])
    const [balance, setBalance] = useState()
    const [transaction, setTransaction] = useState()
    const [amount, setAmount] = useState("10")
    const [txHash, setTxHash] = useState()
    const [recipientAddress, setRecipientAddress] = useState("")
    const [witnesses, setWitnesses] = useState()
    const [policy, setPolicy] = useState()
    const [builtTransaction, setBuiltTransaction] = useState() 

    const [complextxHash, setComplextxHash] = useState()
    const [policyExpiration, setPolicyExpiration] = useState(new Date());
    const [complexTransaction, setComplexTransaction] = useState({recipients: [{address:recipientAddress, 
        amount: "3", 
        mintedAssets:[{assetName: "MyNFT", quantity:'1',  policyId: "Example PolicyID", 
        policyScript:"ExamplePolicy"}] }]})

    useEffect(() => {
        const defaultDate = new Date();
        defaultDate.setTime(defaultDate.getTime() + (1 * 60 * 90 * 1000))
        setPolicyExpiration(defaultDate);

    }, [])
    useEffect(() => {
        async function t() {

            const S = await Cardano();
            nami = new NamiWalletApi(
                S,
                window.cardano,
               blockfrostApiKey
            )


            isConnected();
        }

        t()
    }, [])

    useEffect(() => {
        const t = async () => {
            setComplexTransaction(prevState => {
                const state = prevState;
                state.recipients[0].address = recipientAddress;
                return {...state};
            });
        }
        t()
    },[recipientAddress])

    const isConnected = async () => {
        let _connected = false;
        
        if (await nami.isInstalled()) {
            await nami.isEnabled().then(result => { 
                setConnected(result)
                _connected = result;
                if (result == true) {
                    getAddress();
                }
            })
        }
        return _connected;
    };
   
    const connect = async () => {
        // Connects nami wallet to current website 
        let _connected = false;
        await nami.enable()
            .then(result => {
                setConnected(result)
                _connected = result;
                if (result)
                    getAddress();
            })
            .catch(e => console.log(e))
        return _connected;
    }

    const getAddress = async () => {
        // retrieve address of nami wallet
        if (!connected) {
            await connect()
        }
        await nami.getAddress().then((newAddress) => { 
            setAddress(newAddress) 
            setComplexTransaction(prevState => {
                const state = prevState;
                state.recipients[0].address = newAddress;
                return {...state};
            })
        })
    }


    const getBalance = async () => {
        if (!connected) {
            await connect()
        }
        let _balance;
        let _assets;
        await nami.getBalance().then(result => { console.log(result); setNfts(result.assets); _balance = result.lovelace; _assets = result.assets.length; setBalance(result.lovelace) })
        return {balance: _balance, assets: _assets};
    }


    const buildTransaction = async () => {
        if (!connected) {
            await connect()
        }

        const recipients = [{ "address": recipientAddress, "amount": amount }]
        let utxos = await nami.getUtxosHex();
        const myAddress = await nami.getAddress();
        
        let netId = await nami.getNetworkId();
        const t = await nami.transaction({
            PaymentAddress: myAddress,
            recipients: recipients,
            metadata: null,
            utxosRaw: utxos,
            networkId: netId.id,
            ttl: 3600,
            multiSig: null
        })
        console.log(t)
        setTransaction(t)
    }



    const buildFullTransaction = async () => {
        if (!connected) {
            await connect()
        }
        try {
        const recipients = complexTransaction.recipients
        const metadataTransaction = complexTransaction.metadata
        console.error(metadataTransaction)
        let utxos = await nami.getUtxosHex();
        
        const myAddress = await nami.getAddress();
        console.log(myAddress)
        let netId = await nami.getNetworkId();

        const t = await nami.transaction({
            PaymentAddress: myAddress,
            recipients: recipients,
            metadata: metadataTransaction,
            utxosRaw: utxos,
            networkId: netId.id,
            ttl: 3600,
            multiSig: null
        })
        setBuiltTransaction(t)
        const signature = await nami.signTx(t)
        console.log(t, signature, netId.id)
        const txHash = await nami.submitTx({
            transactionRaw: t,
            witnesses: [signature],

            networkId: netId.id
        })
        console.log(txHash)
        setComplextxHash(txHash)
        return txHash;
    } catch (e){
        console.log(e)
    }
    }


    
    const signTransaction = async () => {
        if (!connected) {
            await connect()
        }

        const witnesses = await nami.signTx(transaction)
        setWitnesses(witnesses)
    }

    const submitTransaction = async () => {
        let netId = await nami.getNetworkId();
        const txHash = await nami.submitTx({
            transactionRaw: transaction,
            witnesses: [witnesses],

            networkId: netId.id
        })
        setTxHash(txHash)

    }

    const createPolicy = async (quantity) => {
        console.log(policyExpiration)
        try {
            await nami.enable()


            const myAddress = await nami.getHexAddress();
            
            let networkId = await nami.getNetworkId()
            const newPolicy = await nami.createLockingPolicyScript(myAddress, networkId.id, policyExpiration)

            setPolicy(newPolicy)
            setComplexTransaction((prevState) => 
            {const state = prevState;   state.recipients[0].mintedAssets[0].policyId = newPolicy.id; 
                state.recipients[0].mintedAssets[0].policyScript = newPolicy.script; 
                state.recipients[0].mintedAssets[0].quantity = quantity;
                state.metadata = {"721": {[newPolicy.id]: 
                    {[state.recipients[0].mintedAssets[0].assetName]: {name: "Lorem Ipsum", description: "Lorem Ipsum", image: "ipfs://QmS3E63KwbEiUGdqwFgno2mxKHHaiPW57HDRVdWqK4ewME"}} }};
                 return {...state}})

        } catch (e) {
            console.log(e)
        }

    }

    return (<>
        <div className="container" style={{display: 'none'}}>
            <h1 style={{ textAlign: "center" }}>Introduction to basic Nami wallet functionalities</h1>
            <p>In these small examples we demonstrate basic Nami wallet functionalities.</p>
            <p>If you do not have Nami Wallet installed you can download Nami Wallet <a href="https://namiwallet.io/" target="_blank"> here</a>.</p>
            <div className="container">
                <div className="row" >
                    <h1> 1. Connect your website to Nami Wallet</h1>
                </div>
                <div className="row" >
                    <button className={`button ${connected ? "success" : ""}`} onClick={connect} > {connected ? "Connected" : "Connect to Nami"} </button>
                </div>
                <div className="row" >
                    <h1> 2. Retrieve your Nami wallet address</h1>
                </div>
                <div className="row" >
                    <button className={`button ${address ? "success" : ""}`} onClick={getAddress}> Get Your Address </button>
                    {address && <div className="item address">
                        <p>My Address:  {address} </p>
                    </div>}
                </div>
                <div className="row" >
                    <h1> 3. Retrieve your balance and NFTs</h1>
                </div>
                <div className="row" >
                    <button className={`button ${balance ? "success" : ""}`} onClick={getBalance}> Get Your Balance and NFTs </button>
                    {balance && <> <div className="column" >
                        <div className="item balance"><p>Balance ₳:  {balance / 1000000.} </p>

                        </div>


                        {nfts.map((nft) => {
                            return <><div className="item nft"><p>unit: {nft.unit}</p>
                                <p>quantity: {nft.quantity}</p>
                                <p>policy: {nft.policy}</p>
                                <p>name: {nft.name}</p>
                                <p>fingerprint: {nft.fingerprint}</p>
                            </div>
                            </>

                        })}
                    </div>
                    </>
                    }

                </div>
                <div className="row" >
                    <h1> 4. Build Transaction</h1>
                </div>
                <div className="row" >
                    <button className={`button ${(transaction) ? "success" : ""}`} onClick={() => { if (amount && recipientAddress) buildTransaction() }}> Build Transaction</button>
                    <div className="column" >



                        <div className="item address"><p> Amount</p><input style={{ width: "400px", height: "30px", }}
                            value={amount}
                            onChange={(event) => setAmount(event.target.value.toString())} /></div>

                        <div className="item address"><p> Recipient Address</p>
                            <input style={{ width: "400px", height: "30px" }}
                                value={recipientAddress}
                                onChange={(event) => setRecipientAddress(event.target.value.toString())} /></div>

                    </div>




                </div>

                <div className="row" >
                    <h1> 5. Sign Transaction</h1>
                </div>
                <div className="row" >
                    <button className={`button ${(witnesses) ? "success" : ""}`} onClick={() => { if (transaction) signTransaction() }}> Sign Transaction</button>
                    <div className="column" >






                    </div>
                </div>
                <div className="row" >
                    <h1> 6. Submit Transaction</h1>
                </div>
                <div className="row" >
                    <button className={`button ${(txHash) ? "success" : ""}`} onClick={() => { console.log(witnesses); if (witnesses) submitTransaction() }}> Submit Transaction</button>

                    <div className="column" >
                        <div className="item address">
                            <p>TxHash:  {txHash} </p>
                        </div>





                    </div>

                </div>
                <div className="row" >
                    <h1> 7. Create Policy Script</h1>
                </div>
                <div className="row" >
                    <button className={`button ${(policy) ? "success" : ""}`} onClick={() => { if (policyExpiration) createPolicy("1") }}> Create Policy</button>

                    <div className="column" >
                    <p>Set Policy Expriaton Date: <DateTimePicker
                               
                               onChange={setPolicyExpiration}
                               value={policyExpiration}
                               minDate={new Date()}
                           />
                           </p>
                        <div className="item address">
                        
                            <p>policyId:  {policy?.id} </p>
                            <p>policyScript:  {policy?.script} </p>
                            <p>paymentKeyHash:  {policy?.paymentKeyHash} </p>
                            <p>ttl:  {policy?.ttl} </p>
                        </div>





                    </div>

                </div>



            </div>

            

                <div className="row" >
                    <h1> 8. Build Full Transaction (incl. Minting)</h1>
                </div>
                <div className="row" >
                    <button className={`button ${(complextxHash) ? "success" : ""}`} onClick={ buildFullTransaction}> Build Transaction</button>
                    <div className="column" >


                    <div className="item address">
                            <p>Complex TxHash:  {complextxHash} </p>
                        </div>

                        <div className="item address"><p> Recipients Input</p><textarea style={{ width: "400px", height: "500px", }}
                            value={JSON.stringify(complexTransaction)}
                            onChange={(event) => 
                            {setComplexTransaction((prevState) =>( {...JSON.parse(event.target.value)}))}} />
                            </div>

                      

                   
                    <div className="item address"><p>Transaction Hash: </p> <textarea style={{ width: "400px", height: "500px", }} 
                    value={builtTransaction} />

                    </div>
                    </div>



                </div> 
            
            
        </div>
        <div className="App">
            <Layout connectWallet={connect} connected={connected} createPolicy={createPolicy} getBalance={getBalance} buildFullTransaction={buildFullTransaction} isConnected={isConnected}/>                        
        </div>
    </>
    )
}



    