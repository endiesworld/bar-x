import React,{useState, useEffect, useRef} from 'react' ;
import { connect } from "react-redux" ;

import {LpoStatusParentDiv, LpoStatusDiv, } from "./lpoStatus.styled" ;
import LpoTable from "./lpo_table.component" ;
import FooterComponent from "../../../../../footerComponent/footer.component";
import {PrcessLPOs} from "../../../../../../firebase/inventory/get_lpos_firebase" ; 
import Loading from "../../../../../loading/loading.component" ;
import { getGeneratedLpoData , getOpenData, getClosedData} from "./lpo_data" ; 
import {getDeviceType} from "../../../../../../redux/deviceType/deviceType.selector" ;

function LpoStatus({uid, deviceType}) {
    const [lpoDatas, setLpoData] = useState(false) ;
    const lpodata = new PrcessLPOs(uid) ;
    const newTableData = useRef([{},{},{}]) ;
    const tables = [ getGeneratedLpoData(lpodata) , getOpenData(lpodata) , getClosedData(lpodata) ] ;
     
    useEffect(() => {
        tables.forEach( async (table, index) => {
            await table.processTotalAmount().then((result) => {
            newTableData.current[index].title = table.title ;
            newTableData.current[index].storeTotalCost = result ;  
            newTableData.current[index].setLposSummary =  table.processLpoSummary() ;
            } )
            if (index === 2)  setLpoData(true) ;
        }  ) ;
   }) ;

return  (!lpoDatas) ? <Loading /> :
 (
        <LpoStatusParentDiv>
            <LpoStatusDiv devicetype = {deviceType}>
                {newTableData.current.map((table, index) => 
                <LpoTable key ={index} title={table.title}
                     lpoTotalAmount = {table.storeTotalCost}
                     lpoSummary = {table.setLposSummary}/>
                )}
            </LpoStatusDiv>   
            <FooterComponent />
        </LpoStatusParentDiv>
    )
}

const mapStateToProps = (state) => {
    const deviceType  =  getDeviceType(state) ;
    const { uid } = state.uid ;
    return {uid, deviceType};
};

export default connect(mapStateToProps)(LpoStatus);


