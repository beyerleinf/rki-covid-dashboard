#!/bin/bash

cd dist
tar -zcf release.tar.gz rki-covid-dashboard/
zip -rq release.zip rki-covid-dashboard/