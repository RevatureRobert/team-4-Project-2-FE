import * as React from 'react';
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

import Post from './Post';
import { Platform } from 'react-native';

describe('Post', () =>
{
    test('Should have correct information', () =>
    {
        const postInfo = {
            username:'user1', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
        }

        const wrapper = renderer.create(<Post username='user1' userProfilePic='yes' Contents='There once was a little bunny that ran around' timestamp={5} postID='001' />);

        console.log(wrapper);
        //const prop = wrapper.find(Platform.select({ default: 'View', web: 'div' })).prop('testID');

        //expect(prop).toBeDefined();
    })
})