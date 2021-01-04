import {firestore } from "../firebase.util.store" ;


const lpoDirectory = {
    open : "inventory/generatedLPO/lpos/openlpos" ,
    closed : "inventory/generatedLPO/lpos/closedlpos" 
}

export class PrcessLPOs {
    constructor(uid) {
        this.uid = uid ;
        this.generatedLposObject = 0 ;
        this.generatedLposArray = 0 ;
        this.closedLposObject = 0 ;
        this.closedLposArray = 0;
        this.lpoDefaultValue = [{poDate: "_ /_ /_", poNumber: "0000", vendorCompanyName: "...", totalAmount: "0.00"}] ;
    }

    getGeneratedLpos = async () =>{
        await firestore.doc(`bars/${this.uid}/${lpoDirectory.open}`).get() 
        .then((result)=> {
            if(result.exists){
                this.generatedLposObject  = result.data() ;
                this.generatedLposArray = Object.values(this.generatedLposObject) ;
            }
            else{
                this.generatedLposArray =  this.lpoDefaultValue ;
            }
        }).catch(function(error) {
            alert("failed to get generated LPOs :", error);
        } )
        return  this.generatedLposArray ;
    }

    getTotalAmountOfLposGenerated = async () => {
    let arrayOfTotals ;
    let sumOfLpos  ;
    await this.getGeneratedLpos().then((result) => {
        arrayOfTotals = result.map((lpo) => lpo.subTotal) ;
        sumOfLpos = arrayOfTotals.reduce((accumulator, currentValue) => accumulator + currentValue); 
        (sumOfLpos) ? sumOfLpos = new Intl.NumberFormat().format(sumOfLpos): sumOfLpos = "0.00";
    })
    return sumOfLpos ;
    }

    getGeneratedLposSummaries = () =>{
        let lpoSummary = this.generatedLposArray.map((lpo) =>{
            const {poDate, poNumber, vendorCompanyName, totalAmount} = lpo ;
            return {poDate, poNumber, vendorCompanyName, totalAmount} ;
        } ) ;
        lpoSummary.sort((a, b) => (a.poNumber > b.poNumber) ? 1 : -1) ;
        return lpoSummary ;
    }

    getClosedLpos = async () =>{
        await firestore.doc(`bars/${this.uid}/${lpoDirectory.closed}`).get() 
        .then((result)=> {
            if(result.exists){
                this.closedLposObject  = result.data() ;
                this.closedLposArray = Object.values(this.closedLposObject) ;
            }
            else{
                this.closedLposArray =  this.lpoDefaultValue ;
            }
        }).catch(function(error) {
        alert("failed to get closed LPOs :", error);} )
        return  this.closedLposArray ;
    }

    getTotalAmountOfClosedLpos = async () => {
    let arrayOfTotals ;
    let sumOfClosedLpos  ;
    await this.getClosedLpos().then((result) => {
        arrayOfTotals = result.map((lpo) => lpo.subTotal) ;
        sumOfClosedLpos = arrayOfTotals.reduce((accumulator, currentValue) => accumulator + currentValue); 
        (sumOfClosedLpos) ? sumOfClosedLpos = new Intl.NumberFormat().format(sumOfClosedLpos):
        sumOfClosedLpos = "0.00" ;
    })
    return sumOfClosedLpos ;
    }

    getClosedLposSummaries = () =>{
        let lpoSummary = this.closedLposArray.map((lpo) =>{
            const {poDate, poNumber, vendorCompanyName, totalAmount} = lpo ;
            return {poDate, poNumber, vendorCompanyName, totalAmount} ;
        } ) ;
        lpoSummary.sort((a, b) => (a.poNumber > b.poNumber) ? 1 : -1) ;
        return lpoSummary ;
    }

}