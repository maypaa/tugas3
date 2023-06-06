import "./Card.css"

function Card(props){
    function handleClick(){
        alert(`Produk ${props.productName} dengan harga ${props.productPrice} adalah produk kualitas Terbaik`);
    }
    return(
        <div className="card">
        <div className="box" onClick={handleClick}>
            <img src={props.gambar}/>
            <p>{props.productName}</p>
            <p>{props.productPrice}</p>
        </div>
        </div>
    )
}

export default Card;