it('Sem testes ainda', () => {
    
});

const getSomething = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(12)
        }, 1000)
        
    })
}


const system = async() => {
    console.log('Init')
    const some = await getSomething()
    
    
    console.log(`Something is ${some}`)
    
    // getSomething(something => console.log(`Something is ${something}`))
    console.log('End')
}

system()