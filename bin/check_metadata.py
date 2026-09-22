"""Validate generated Schema.org JSON after `bundle exec jekyll build`."""

import json
from html.parser import HTMLParser
from pathlib import Path


class SchemaParser(HTMLParser):
    in_schema = False
    count = 0

    def handle_starttag(self, tag, attrs):
        if tag == "script":
            self.in_schema = dict(attrs).get("type") == "application/ld+json"

    def handle_data(self, data):
        if self.in_schema:
            json.loads(data)
            self.count += 1

    def handle_endtag(self, tag):
        if tag == "script":
            self.in_schema = False


parser = SchemaParser()
for page in Path("_site").rglob("*.html"):
    parser.feed(page.read_text())
assert parser.count, "No Schema.org JSON found; build the site first."
print(f"Validated {parser.count} Schema.org blocks.")
