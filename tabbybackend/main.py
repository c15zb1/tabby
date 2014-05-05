#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import models
from google.appengine.ext import db
from google.appengine.api import mail
import json

class MainHandler(webapp2.RequestHandler):
	def get(self):
		url = self.request.get("urls")

		url = url.replace("((((()))))", "#")
		urls = url.split(",")
	
		URLs = models.Links(URLs=urls)
		URLs.put()
		self.response.write(str(URLs.key()))
		user_address = self.request.get("email")
		urltosend = "tabbybackend.appspot.com/linkhandler?key=" + str(URLs.key())
		sender_address = "<Tabby> helpmetabbyyouremyonlyhope@gmail.com"
		subject = "Someone special you some tabs"
		body = """
Click here to see your special surprise:

%s
""" % urltosend
		mail.send_mail(sender_address, user_address, subject, body)

class LinkHandler(webapp2.RequestHandler):
	def get(self):
		key = self.request.get("key")
		urls = db.get(key)
		self.response.write('<html> <body onload="')
		i = 0
		for url in urls.URLs:
			if i == 0:
				self.response.write("""var win = window.open('%s',''); win.focus(); \n""" % str(url))
			else:
				self.response.write("""window.open('%s','_blank'); \n""" % str(url))
			i = i + 1


		self.response.write('"></body></html>')

app = webapp2.WSGIApplication([
	('/', MainHandler),
	('/linkhandler', LinkHandler)
], debug=True)
