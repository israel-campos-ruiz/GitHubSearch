import React from 'react'
import '@testing-library/jest-dom';
import shallow from 'enzyme/build/shallow';
import  GitHubUser from '../../pages/GitHubUser'
describe('test in the component <GitHubUser />', () => {
        test('should print the component', () => {
            const wrapper = shallow(<GitHubUser/>)
            expect(wrapper).toMatchSnapshot();
        })
        
});