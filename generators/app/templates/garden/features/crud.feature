Feature: CRUDing <%= properCasedModel %>s
  Describe your feature here


Scenario: Indexing <%= modelName %>s
  Given a user with multiple <%= modelName %>s
  And another user with multiple <%= modelName %>s
  When requesting all <%= modelName %>s
  Then the service should return a list of the user's <%= modelName %>s

Scenario: Creating <%= modelName %>s
  When creating a <%= modelName %>
  Then the service should return the <%= modelName %>s

Scenario: Editting <%= modelName %>
  When editting a <%= modelName %>
  Then the service should return the <%= modelName %> with the submitted edits

Scenario: Editting a nonexistent <%= modelName %>s
  When attempting to edit a nonexistent <%= modelName %>
  Then the service should return a 404

Scenario: Editting another user's <%= modelName %>s
  When attempting to edit another user's <%= modelName %>
  Then the service should return a 404

Scenario: Deleting <%= modelName %>s
  When deleting a <%= modelName %>
  Then the service should return no content

Scenario: Deleting a nonexistent <%= modelName %>
  When attempting to delete a nonexistent <%= modelName %>
  Then the service should return a 404

Scenario: Deleting another user's <%= modelName %>
  When attempting to delete another user's <%= modelName %>
  Then the service should return a 404

Scenario: Accessing the resource with a missing Authorization header
  When accessing the resource with a missing Authorization header
  Then the service should return 'bad request'
