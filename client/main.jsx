import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Site from '../imports/ui/Sites.jsx';


Meteor.startup(() => {
	render(<Site />, document.getElementById('site-target'));
});