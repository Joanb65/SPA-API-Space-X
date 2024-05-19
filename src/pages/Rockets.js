import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Rockets = async () => {
    const launches = await getData();
    const launch_id = await getHash();
    
    const launch = launches.find(launch => launch.id === launch_id);

    if (!launch) {
        return `<div class="Rockets-inner">Launch not found</div>`;
    }

    const view = `
        <div class="Rockets-inner">
            <article class="Rockets-card">
                <img src="${launch.links.patch.small}" alt="${launch.name}">
                <h2>${launch.name}</h2>
            </article>

            <article class="Rockets-card">
                <h3>Flight Number: <span>${launch.flight_number}</span></h3>
                <h3>Launch Date: <span>${new Date(launch.date_utc).toLocaleString()}</span></h3>
                <h3>Details: <span>${launch.details || 'No details available'}</span></h3>
                <h3>Failures: <span>${launch.failures.length > 0 ? (
                    launch.failures.map(failure => `${failure.reason}`).join(', ')
                ) : 'No failures'}</span></h3>
            </article>
        </div> 
    `;
    return view;
};

export default Rockets;

