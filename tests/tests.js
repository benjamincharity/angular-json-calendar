import 'angular';
import 'angular-mocks/angular-mocks';

const testsContext = require.context('.', true, /.spec$/);
testsContext.keys().forEach(testsContext);

