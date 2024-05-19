import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();

    const view =  `
        <div class="Rockets">
        ${launches.map(launch => `
        <article class="Rockets-item">
            <a href="#/${launch.id}/">
            <img src="${launch.link.patch.small}" alt="">
            <h2>${launch.name}</h2>
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;