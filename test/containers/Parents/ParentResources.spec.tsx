import { shallow } from 'enzyme';
import { ParentResources } from 'src/containers/Parents/ParentResources/ParentResources';
import ParentResourcesContent from 'src/containers/Parents/ParentResources/ParentResourcesContent';
import CreateResourceLinks from 'src/containers/Parents/ParentResources/ParentResourceLinks';

describe('Parent Resources', () => {
  it('Renders the Parent Resources Page', () => {
    const wrapper = shallow(<ParentResources />);
    expect(wrapper.find(ParentResourcesContent).exists()).toBe(true);
    expect(wrapper.find(ParentResourcesContent).dive().find('main.parent-resources-main--content').exists()).toBe(true);
    expect(wrapper.find(ParentResourcesContent).dive().find(CreateResourceLinks).dive()
      .find('div.parent-resources')
      .exists()).toBe(true);
  });
});
