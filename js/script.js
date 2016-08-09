

function submitForm() {
  $('form').on('submit', (event) => {
    var repoName = $('#repoName').val();
    var repoOwner = $('#repoOwner').val();
    var title = $('#title').val();
    var body = $('#body').val();

    createIssue(repoName, repoOwner, title, body);
    event.preventDefault();
  });
}

function createIssue(repoName, repoOwner, title, body) {
  debugger;
  // /repos/:owner/:repo/issues
  const url = 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/issues';
  const data = {
    title: title,
    body: body
  };
  // 
  $.ajax({
    url: url,
    type: 'POST',
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "token " + 'toke here');
    },
    data: JSON.stringify(data)
  }).done(function(response) {

    var link = $('<a>').attr('href', this.issueURL).text(this.title);
    $('#issue').append(link);

  }).fail(function(error) {
    // console.log(error);
  });
}


$(document).ready(function(){
  submitForm();
});
