using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace RentalNorth.Services
{
    // This class is used by the application to send Email and SMS
    // when you turn on two-factor authentication in ASP.NET Identity.
    // For more details see this link http://go.microsoft.com/fwlink/?LinkID=532713
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            // Plug in your email service here to send an email.
            //Skapa själva epostmeddelandet med indata "from" och "to"
            MailMessage mail = new MailMessage("awacademynet@gmail.com", email);
            //skapa en E-postklient med server och port
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
            //Eftersom min server kräver SSL aktiverar jag detta. Sätt till false om annan server utan SSL nyttjas
            client.EnableSsl = true;
            //Min server kräver login, lagrar mitt inlogg i en Credential.
            NetworkCredential myLogin = new NetworkCredential("awacademynet@gmail.com", "awa2016!");
            //Talar om hur smtpklienten ska kommunicera
            //client.DeliveryMethod = SmtpDeliveryMethod.Network;
            //Stänger av default cred. för att kunna lägga till mina egna inloggningsuppgifter.
            client.UseDefaultCredentials = false;
            //Lägger på myLogin, en credential där jag lagrat användarnamn och lösenord.
            client.Credentials = myLogin;
            //Lägger in txt i mejlets ämnesrad.
            mail.Subject = subject;
            //Väljer encoding för att kunna skicka ÅÄÖ
            mail.BodyEncoding = System.Text.Encoding.UTF8;
            //skapa body i mailet.

            //Lägger in namn , adresser och telefonnummer i mailet.
            mail.Body = message;

            mail.Body += "\nFramtiden är här ☺";
            mail.IsBodyHtml = true;
            //Skicka mail!
            client.SendAsync(mail, null);


            return Task.FromResult(0);
        }

        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            return Task.FromResult(0);
        }
    }
}
