import React from "react";
import Park from './Park';

const Grid = () =>{
    return(
        <div className = "Grid">
            <table>
                <tr>
                    <Park park='Tony Dapolito Pool' location='Clarkson St and Seventh Ave. South' site="https://www.nycgovparks.org/parks/tony-dapolito-recreation-center/facilities/indoor-pools/tony-dapolito-pool"/>
                    <Park park='Hansborough Pool' location='134th St between Fifth & Lenox Aves.' site="https://www.nycgovparks.org/parks/hansborough-recreation-center/facilities/indoor-pools/hansborough-pool"/>
                    <Park park='Gertrude Ederle Pool' location='232 West 60th Street' site="https://www.nycgovparks.org/parks/west-59th-st-rec-ctr-and-pool/facilities/indoor-pools/gertrude-ederle-pool"/>
                    <Park park='Constance Baker Motley Pool' location='E. 54th St bet. First and Second Aves.' site="https://www.nycgovparks.org/parks/M130/facilities/indoor-pools"/>
                    <Park park='Chelsea Pool' location='West 24th St between 9th & 10th Aves' site="https://www.nycgovparks.org/parks/M260/facilities/indoor-pools"/>
                    <Park park='Asser Levy Pool' location='Asser Levy Place and E. 23rd Street' site="https://www.nycgovparks.org/parks/asser-levy-recreation-center-pool-and-playground/facilities/indoor-pools/asser-levy-pool"/>
                </tr>

            </table>
        </div>
    );
}

export default Grid;