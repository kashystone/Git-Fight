    let scores1 = JSON.parse(localStorage.getItem('clot1'));
    let scores2 = JSON.parse(localStorage.getItem('clot2'));
if (JSON.parse(localStorage.getItem('clot1')) > JSON.parse(localStorage.getItem('clot2'))) {
    

    document.getElementById('nice').innerHTML += `Score: ${scores1}`;
    document.getElementById('nicez').innerHTML += `Score: ${scores2}`;
    document.getElementById('thirdP').innerHTML +=
    JSON.parse(localStorage.getItem('player1'));
    document.getElementById('newt').innerHTML +=
    JSON.parse(localStorage.getItem('player2'));
  

      } else {
        document.getElementById('nicez').innerHTML += `Score: ${scores1}`;
      document.getElementById('nice').innerHTML += `Score: ${scores2}`;
      document.getElementById('newt').innerHTML +=
      JSON.parse(localStorage.getItem('player1'));
      document.getElementById('thirdP').innerHTML +=
      JSON.parse(localStorage.getItem('player2'));
      }
      
       let resetScores = 0;
      localStorage.setItem('player1', resetScores);
      localStorage.setItem('player2', resetScores);
      localStorage.setItem('clot1', resetScores);
      localStorage.setItem('clot2', resetScores);
    
    //   done!