# pdbe-autocomplete-search

## Getting Started
1. Clone / download the repository
2. run - 'npm install' command to download the dependencies
3. check the examples for implementation

## Steps to build changes
run - 'ng build --prod --aot' command. It will update the 'dist' folder with recent build files

Refer to Angular cli (https://github.com/angular/angular-cli) to find more useful commands

## Config object

Add it to application page to customise the component
```html
PdbeAutocompleteSearchConfig = {
  resultBoxAlign: 'left',
  redirectOnClick: false,
  searchUrl: '//www.ebi.ac.uk/pdbe/search/pdb-autocomplete/select',
  fields: 'value,num_pdb_entries,var_name',
  group: 'group=true&group.field=category',
  groupLimit: '25',
  sort: 'category+asc,num_pdb_entries+desc',
  additionalParams: 'rows=20000&json.nl=map&wt=json'
}

*Params*
resultBoxAlign: 'left' (default) | 'right' -- Aligns the resulbox to the input field starting from left or right as per settings
redirectOnClick: false (default) | true -- If set true, redirects to PDBe pages on result item click
searchUrl: '//www.ebi.ac.uk/pdbe/search/pdb-autocomplete/select' (default) -- Solr core / server url
fields: 'value,num_pdb_entries,var_name' (default) -- comma separated string of required fields in result
group: 'group=true&group.field=category' (default) -- comma separated string of grouping related parameters
groupLimit: '25' (default) -- group limit value
sort: 'category+asc,num_pdb_entries+desc' (default) --  comma separated string of sorting related parameters
additionalParams: 'rows=20000&json.nl=map&wt=json' (default) -- comma separated string of additional search parameters
```
