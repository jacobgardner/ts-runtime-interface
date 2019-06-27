import { validateInterface as renamed } from 'runtime-check';

import { RecordKey as RK, CertificateType } from './interfaces';
import { RecordKey as RK2 } from './interfaces-again';

type Dup = RK;

const key: RK = renamed({ key: 'thing', certType: 'application' }); // $ExpectType RecordKey
const key2 = renamed({ key: 'thing', certType: 'application' }) as RK; // $ExpectType RecordKey

const certType: string = renamed('application');

const thing: RK2 = {};

let delayed: CertificateType;

delayed = renamed('application'); // $ExpectType CertificateType

const fu = renamed('application') as CertificateType;
const fu2: CertificateType = renamed('application');

let delayedType;
delayedType = renamed({ key: 'thing', certType: 'application' }) as Dup; // $ExpectType RecordKey

