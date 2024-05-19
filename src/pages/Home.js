import getData from '../utils/getData';

const Home = async () => {
    const launches = await getData();

    const view = `
        <div class="Rockets">
        ${launches.map(launch => `
        <article class="Rockets-item">
            <a href="#/${launch.id}/">
            <img src="${launch.links.patch.small}" alt="${launch.name}">
            <h2>${launch.name}</h2>
            </a>
        </article>
        `).join('')}
        </div>
    `;
    return view;
};

export default Home;
