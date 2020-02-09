import { User } from './User';
import { Company } from './Comapny';
import { CustomMap } from './CustomMap';
const user = new User();
const company = new Company();
const customeMap = new CustomMap('map');

customeMap.addMarker(user);
customeMap.addMarker(company);
