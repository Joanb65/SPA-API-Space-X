import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Rockets =  async () => {

    const launches = await getData();
    const launch_number = await getHash();
    console.log(launch_number)
    const launch = launches.find(launch => launch.id === launch_number);
    console.log(launch)
    const view = `
        <div class="Rockets-inner">
            <article class="Rockets-card">
                <img src="${launch.links.patch.small}">
                <h2>${character.name}</h2>
            </article>

            <article class="Rockets-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status:<span>${character.status}</span></ </h3>
                <h3>Species: <span>${character.species}</span></</h3>
                <h3>Gender: <span>${character.gender}</span></</h3>
                <h3>Origin: <span>${character.origin.name}</span></</h3>
                <h3>Last Location: <span>${character.location.name}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Rockets;