<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/styles.css">

<title>Login</title>

<script type="text/javascript" src="https://platform.linkedin.com/in.js">
    api_key: {77j5b8lkj75jz9}
    authorize: true
</script>
 
<script type="text/javascript">
function onLinkedInAuth() {
  IN.API.Profile("me")
    .result( function(me) {
      var id = me.values[0].id;
      // AJAX call to pass back id to your server
    });
}
</script>

</head>

<body style='background-color:gray'>

<script type="IN/Login"> 
  <form action="/register.html"> 
  <p>Your Name: <input type="text" name="name" value="<?js= firstName ?> <?js= lastName ?>" /></p>
  <p>Your Password: <input type="password" name="password" />  </p>
  <input type="hidden" name="linkedin-id" value="<?js= id ?>" />
  <input type="submit" name="submit" value="Sign Up"/>
</script>

<script type="IN/Login" data-onAuth="onLinkedInAuth"></script>
</body>