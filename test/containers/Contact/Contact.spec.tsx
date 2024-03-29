/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Contact } from 'src/containers/Contact/Contact';
import ContactContent from 'src/containers/Contact/ContactContent';

describe('Contact', () => {
  const wrapper = shallow(<Contact />);
  it('renders', () => {
    expect(wrapper.find(ContactContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ContactContent).dive().find('main.contact-main--content').exists()).toBe(true);
  });
  
});
