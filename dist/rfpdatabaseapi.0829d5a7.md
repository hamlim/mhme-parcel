For the first in my series of Request for Proposal/Product Blog posts, I wanted to explain an idea I had for a database platform/service. When I am working on a new project I want a very simple API that I can use to store some data (nothing more than 100MB), but in the same token I don't want spend the time setting up a DB either on Airtable, or Fieldbook, or some other cloud service.

So the idea is that you can push some data to an endpoint formatted how you want your database formatted, and then the database sends you back an object with the endpoint URL's that point to whatever they should point to. An example of this is below:

```json
{ "todos": [
    {
      "id": 1,
      "text": "lorem ipsum...",
      "notes": "blah blah blah",
      "subtasks": [
        {
          "text": "something",
          "completed": true
        },
        {
          "text": "something else",
          "completed": false
        }
      ],
      "status": "0"
    },
    {
      "id": 2,
      "text": "lorem ipsum...",
      "notes": "blah blah blah",
      "subtasks": [
        {
          "text": "something",
          "completed": false
        },
        {
          "text": "something else",
          "completed": false
        }
      ],
      "status": "1"
    },
    {
      "id": 3,
      "text": "lorem ipsum...",
      "notes": "blah blah blah",
      "subtasks": [
        {
          "text": "something",
          "completed": true
        },
        {
          "text": "something else",
          "completed": false
        }
      ],
      "status": "2"
    }
  ]
}
```

Then the service returns with an object like this:

```JSON
{
  "Create": "https://link.to.api/`${api_key}`/create",
  "Read": "https://link.to.api/`${api_key}`/get/`${id}`",
  "Update": "https://link.to.api/`${api_key}`/update/`${id}`",
  "Delete": "https://link.to.api/`${api_key}`/delete/`${id}`"
}
```

From here I as a developer can use these url's as API endpoints to update the database. Of course this is limited to data that is stored as JSON, but it could be just as easy to send a CSV format, or declare that in the initial package such as `'db_type': 'json | MySQL | Other'`.

If you know of any such database services please let me know, or if you are interested in seeing something like this exist in the world reach out to me, I would totally be willing to help develop and also be first in line to beta test 😃!
