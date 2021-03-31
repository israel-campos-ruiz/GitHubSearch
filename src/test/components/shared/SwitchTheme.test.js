import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import SwitchTheme from '../../../components/shared/SwitchTheme';
import useTheme from '../../../hooks/useTheme';
import { renderHook, act } from '@testing-library/react-hooks'
describe('Test in the component  <SwitchTheme/>',() =>{

    test('shold be render a component', () => {
       const wrapper = shallow(<SwitchTheme/>);
       expect(wrapper).toMatchSnapshot()
   });

   test('the darkmode should be false in the light-mode', () => {
   const {result} =  renderHook(() =>  useTheme())
   const {darkMode} = result.current;
   expect(darkMode).toBe(false)
   });
   test('the function setChecked to be false', () => {
   const {result} =  renderHook(() =>  useTheme())
   const {setChecked, checked} = result.current;
    act(()=>{
        setChecked()
    })
    expect(checked).toBe(false)
    
   })
});