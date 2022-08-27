function cartButton(){
    return `
    <div id="">
      <div class="CartPage">
        
      </div>
      
    </div>
    <div id="Price_rotate">
    <button id="totalpriceShow" class="btn">0</button>
    </div>
    <div id="mainCartContantPagr">
    <div id="st">
    <div id="lef"></div>
    <div id="rig">
       <div id="tt">
          <div>Order Summary</div>
          <div>
            <img style="display: flex; margin-top: 40%; justify-content: left;  justify-content: center; height: 50px; width: 60px;" src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"/>

            <input style="margin-left: -48%;" type="date" placeholder="CheckIn Date"/>
            <label for="">CheckIn Date</label>
            <input type="date" style="margin-left: -47%; margin-top: 5%;" placeholder="CheckOut Date"/>
          </div>

          <div>
             <div>Total Booking </div>
             <div id="tItem" style: "font-size: 20px; text-align: center;">2</div>
          </div>
          <div>
             <div>Total Price -</div>
             <div id="total">$2000</div>
          </div>
       </div>
       <div id="mim">
          <div>Apply Promo Code</div>
          <form id="apply">
             <input id="promo" type="text">
             <input type="submit" value="APPLY">
          </form>
          <div>To get 30% Off, use <span> Debasis </span></div>
       </div>

       <div id="dd">CheckOut</div>
       
    </div>
 </div>
      
      <div id="CloseCartBtn">
        <img
          id="closeTheimgTagClose"
          src="https://atlona.com/wp-content/uploads/2016/08/close-button.png"
          alt="close"
        />
      
      </div>
      <button id="proceedto_checkout">S U B M I  T</button>
    </div>
 </div>`
}

export {cartButton};