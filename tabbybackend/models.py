from google.appengine.ext import db

class Links(db.Model):
    URLs = db.StringListProperty()
