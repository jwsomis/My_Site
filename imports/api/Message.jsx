import {Meteor} from 'meteor/meteor';
import AWS from 'aws-sdk';

Meteor.methods({
	'message.send'(form) {
		// TODO: use aws sdk to email me message
		let ses = new AWS.SES();
		let dest = 'wtibbitts@gmail.com';
		let sender = 'wtibbitts@gmail.com';

		ses.sendEmail({
			Source: sender,
			Destination: {ToAddresses: dest}
			Message: {
				Subject: {Data: Website Message},
				Body: {
					Text: form
				}
			}
		},
		function(error, data) {
			if (error) console.log(error);
			else console.log(data);
		});
	}
});