#include <stdio.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <stdlib.h>

#define PORT 39666

int main(void) {
	int sock = socket(AF_INET6, SOCK_STREAM, 0);
	int flag = 1;
	setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &flag, sizeof(flag));
	struct sockaddr_in6 address = {
		.sin6_family = AF_INET6,
		.sin6_port = htons(PORT),
		.sin6_addr = in6addr_any,
	};
	bind(sock, (struct sockaddr *) &address, sizeof(address));
	listen(sock, SOMAXCONN);
	while (1) {
		if (accept(sock, NULL, NULL) == -1) {
			perror("accept");
			return EXIT_FAILURE;
		}
		system("date");
		system("git pull");
	}
}