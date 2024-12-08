import "./Mobile.css"

function Mobile(props){

    function fav(){
        var fav=document.getElementById("fav");
        fav.className = "fa-solid fa-heart"
        fav.style.color = "red";
    }

    function cart(){
        window.alert("Item is added to cart");
    }

    function buy(){
        window.alert("Continue the payment process");
    }
    
    return(
        <>
            <div className="box">
                
                <div id="photo">
                    <img src={props.src} alt="mobile-picture"></img>
                    <i class="fa-regular fa-heart" id="fav" onClick={fav}></i>
                </div>
                <div id="details">
                    <h3 id="name">{props.name}</h3>
                    <ul>
                        <li class="para">{props.para1}</li>
                        <li class="para">{props.para2}</li>
                        <li class="para">{props.para3}</li>
                        <li class="para">{props.para4}</li>
                        <li class="para">{props.para5}</li>
                    </ul>
                    <button class="btn" id="cart" onClick={cart}>Add to Cart</button>
                    <button class="btn" id="buy" onClick={buy}>Buy Now</button>
                </div>
                <div id="price"> 
                    <span id="cost">{props.price}</span>
                    <img id="image" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="flipcart-img"/>
                    <p>Free delivery</p>
                    <p id="offer">Save extra with combo offers</p>
                    <p>Upto {props.offer} Off on Exchange</p>
                </div>
            </div>
            
        </>
    )
}



export default Mobile;