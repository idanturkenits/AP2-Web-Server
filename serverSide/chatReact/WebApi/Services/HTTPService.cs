namespace WebApi.Services
{
    public class HTTPService
    {
        private HttpClient _httpClient;

        public HTTPService()
        {
            _httpClient = new HttpClient();
        }

        public async Task sendTransfer(string server, string username, string id, string content)
        {
            var url = "http://" + server + "/api/transfer";
            _httpClient.BaseAddress = new Uri(url);
            var sendInvitation = new HttpRequestMessage(HttpMethod.Post, url)
            {
                Content = JsonContent.Create(new { from = username, to = id, content = content }),
            };
            await _httpClient.SendAsync(sendInvitation);
        }

        public async Task sendInvitation(string requestServer, string username, string id)
        {
            var url = "http://" + requestServer + "/api/invitations";
            _httpClient.BaseAddress = new Uri(url);
            var sendInvitation = new HttpRequestMessage(HttpMethod.Post, url)
            {
                Content = JsonContent.Create(new { from = username, to = id, server = "localhost:5112" }),
            };
            await _httpClient.SendAsync(sendInvitation);
        }
    }
}
