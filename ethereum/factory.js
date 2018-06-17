import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9ce69597F38060491f277169c0Eda540681B81CD'
);

export default instance;
