import logo from './logo.svg';
import './App.css';
import './style_new.css';
import warning from '../src/assest/images/warning-icon.png';
import Drop_Crose from '../src/assest/images/Drop_Crose.png';
import Delete_Icon from '../src/assest/images/Delete_Icon.png';
import Dots from '../src/assest/images/3Dots.png';
import Graph_img from '../src/assest/images/Graph_img.png';
import React, { useState } from "react";

function App() {
  const [showCol, setShow] = useState(true);
  const handleOpenTab = (itemSelect) => {
    setShow(true);
  }
  return (
    <div className="App">
      <div className='RightSideTable'>
          <div className='NewStrBox'>
            <div className='TitleSection'>
              <p>New strategy
                <img src={warning} className='Small_Image'/>
              </p>
              <button className='Clear_new_trades'>Clear new trades </button>
            </div>
            <div className='TitleSection CheckBoxSection'>
              <div className='Check_Box'>
                <input type="checkbox" id="trade" name="trade" value="trade" />
                <label for="trade ">1 trade selected</label>
              </div>  
              <button className='Clear_new_trades'> Reset Prices </button>          
            </div>
            <div className='CheckBoxSection'>
              <table>
                <tr>
                  <th></th>
                  <th>B/S</th>
                  <th>Expiry</th>
                  <th>Strike</th>
                  <th>Type</th>
                  <th>Lots</th>
                  <th>Price</th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <div className='Check_Box'>
                      <input type="checkbox" id="" name="trade_1" value="trade_1" />
                    </div>
                  </td>
                  <td>
                    <button className='Bold_Btn'>B</button>
                  </td>
                  <td>
                    <select name="thread_Select" id="thread_Select">
                      <option value="6Days">06 Jun (6 days)</option>
                      <option value="13Days">13 Jun (13 days)</option>
                      <option value="20Days">20 Jun (20 days)</option>
                      <option value="27Days">27 Jun (27 days)</option>
                    </select>
                  </td>
                  <td>
                    <button className='Bold_Btn Left_Btn'>-</button>
                    <input type='number' name="Val_thread" className='Val_thread'/>
                    <button className='Bold_Btn Right_Btn'>+</button>
                  </td>
                  <td>
                    <button className='Light_Btn'>CE</button>
                  </td>
                  <td>
                    <select name="thread_Num" id="thread_Num">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </td>
                  <td>
                    <input type='number' name="Val_thread" className='Val_thread Radius_Cls'/>
                  </td>
                  <td className='Last_Icon'>
                    <img src={Drop_Crose} className='Small_Image'/>
                    <img src={Delete_Icon} className='Delete_Icon'/>
                  </td>
                </tr>                
              </table>
            </div>
            <div className='CheckBoxSection Left_Right_Sec'>
              <div className='Left_Side_Section'>
                  <p>Multiplier</p>
                  <select name="thread_Num1" id="thread_Num1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className='Right_Side_Section'>
                  <p>Price <b>Pay 455</b></p>
                  <p>Premium <b>Pay 11,500</b></p>
              </div>
            </div>
            <div className='CheckBoxSection Btn_sec_aLL'>
              <button className='BtnAllBottom'>Add / Edit</button>
              <button className='BtnAllBottom'>Add to Drafts</button>
              <button className='BtnAllBottom Thread_All_Btn'>Trade all</button>              
              <button className='Dots_Btn_All'><img src={Dots} className='Dots_Btn'/></button>
            </div>
          </div>
          <div className='NewStrBox_Down Btn_sec_aLL'>
            <div className="tab">
              <button className="tablinks active" onClick={() => handleOpenTab("ReadyMade")}>Ready-made</button>  
            </div>
            <div className="tabcontent">
            {showCol ? 
              <>
                <p className='Ready_Made'>Please click on a ready-made strategy to load it</p>
                <div className='Section_Selection'>
                  <div className='Graph_selection'>
                    <button className='Selection_Btn ActiveBtn'>Bullish</button>
                    <button className='Selection_Btn'>Bearish</button>
                    <button className='Selection_Btn'>Neutral</button>
                  </div>  
                  <div className='ExpiryDate'>
                    <p className='ExpiryDate_P'>Expiry</p>
                    <select name="thread_Select" id="thread_Select">
                      <option value="6Days">06 Jun (6 days)</option>
                      <option value="13Days">13 Jun (13 days)</option>
                      <option value="20Days">20 Jun (20 days)</option>
                      <option value="27Days">27 Jun (27 days)</option>
                    </select>
                  </div>
                </div>
                <div className='CheckBoxSection'>
                    <button className='Graph_Btn Graph_Btn_Active'>
                      <img src={Graph_img} className='Graph_img'/>
                      <p>Buy Call</p>
                    </button>
                    <button className='Graph_Btn'>
                      <img src={Graph_img} className='Graph_img'/>
                      <p>Bull Call Spread</p>
                    </button>
                </div>      
              </> : ""}
              
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;
