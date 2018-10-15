npm run build

export BUCKET_URI=react-poc-gcp
export KEY_FILE=pocgcp-key.json
export GCLOUD_PROJECT=pocgcp-218817

echo ${BUCKET_URI}

# Authorize and set project
gcloud auth activate-service-account --key-file ${KEY_FILE}
gcloud config set project ${GCLOUD_PROJECT}

# Copy Files
gsutil cp -R ./build gs://${BUCKET_URI}

# # Make Files Publically Accessible
gsutil acl ch -u AllUsers:R gs://${BUCKET_URI}/build/index.html
gsutil acl ch -u AllUsers:R gs://${BUCKET_URI}/build/*.js
gsutil acl ch -r \
-u AllUsers:R gs://${BUCKET_URI}/build/static/

# Edit the website configuration
gsutil web set -m index.html -e index.html gs://${BUCKET_URI}

gcloud app deploy -q

gcloud app browse