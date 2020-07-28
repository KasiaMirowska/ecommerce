import React from 'react';
import { shallow, mount } from 'enzyme';
import FormInput from './FormInput';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    wrapper = mount(<FormInput {...mockProps} />);
  });

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should call handleChange method when input changes', () => {
    wrapper.find('.form-input').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });


  it('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('.form-input-label')).toBe(true);
  });


  it('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);
    expect(newWrapper.exists('.form-input-label')).toBe(false);
  });
});