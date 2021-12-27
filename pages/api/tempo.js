async function tempo(request, response){
    const dynamicDate = new Date(); 

    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscriversResponseJson = await subscribersResponse.json();
    const inscritos = subscriversResponseJson.total_subscribers;       

    const triviaResponse = await fetch("https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple");
    const triviaResponseJson = await triviaResponse.json();
    const question = triviaResponseJson.results[0]['question'];
    const correct_answer = triviaResponseJson.results[0]['correct_answer'];

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos,
        pergunta: question,
        resposta: correct_answer
    })
}

export default tempo;