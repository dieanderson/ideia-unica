function Tempo(props){
    console.log('> Passando pelo Frontend');
    const dynamicDate = new Date();
    const daynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{daynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export function getStaticProps(){
    console.log('> Passando pelo getStaticPropos()');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();    

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;