import '@testing-library/jest-dom';
import {createSerializer} from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
global.matchMedia = global.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    }
  }
Enzyme.configure({ adapter: new Adapter() });
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
