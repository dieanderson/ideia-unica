export async function getStaticPaths(){
    return{
        paths: [
            { params:{ id: '1' } }, 
            { params:{ id: '2' } }
        ],
        fallback: true
    }
}

export async function getStaticProps(context){
    const id = context.params.id;

    return{
        props:{
            id: id
        }
    }
}

function Produtos(props){

    return <div>Id do Produto: {props.id}</div>
}

export default Produtos;

