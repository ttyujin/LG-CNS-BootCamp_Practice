
const container=document.querySelector('#card-container');

const showSkelectonUI=()=>{
    const skelectons=Array.from({length:6},renderSkelectonCard).join('');
    container.innerHTML=skelectons;
}

const renderSkelectonCard=()=>{
    return `
        <div class ='skelecton-card'>
            <img class = 'skelecton-img'>
            <div class='skelecton-body>
                <div class ='skelecton-line short'></div>
                <div class ='skelecton-line title'></div>
                <div class ='skelecton-line text'></div>
                <div class ='skelecton-line text'></div>
            </div>
        </div>
    `;
}

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve,ms)); 
}
const renderCard=(item)=>{
    return `
        <div class ='card'>
            <img class = 'card-img' src='${item.image}' alt='${item.title}'>
            <div class='card-body'>
               ${item.tag ? `<span class='card-tag'>${item.tag}</span>` : ''}
                <h3 class ='card-title'>${item.title}</h3>
                <p class ='card-desc'>${item.description}</p>
                <div class ='card-price'>${item.price}</div>
            </div>
        </div>
    `;
}
const renderCards=(items)=>{
    console.log('debug>>>>renderCards call');
    console.log('debug>>>>container',container);
    container.innerHTML=items.map(renderCard).join("");
}

////////////////////////////////////////////////////////////
const loadData = async () => {
    console.log("1. 데이터 로드 시 스켈레톤 UI를 보여준다.");
    showSkelectonUI();

        const [response] = await Promise.all([
            axios.get('../server/data.json'),
            delay(1500),
        ]);

        console.log("debug >>>> data", response.data);

        renderCards(response.data);
    }

loadData();