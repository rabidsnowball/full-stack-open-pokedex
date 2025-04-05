When programming with Java (not Javascript!), linting can be achieved through a Java IDE like IntelliJ or Eclipse, which come with built-in tools that comply with common standards. You can also install plug-ins like SonaLint for custom rule defintiions by writing your own plug-in.

For unit testing, you can use JUnit's @Test directive along with build tools such as Girdle or Maven to run such tests. Mockito is used to mock ("fake") in-code dependencies. The framework Spring offers SpringIntegrationTesting for (you guessed it) integration testing. RestAssured, Playwright, and Jackson can be used for API testing. 

For building (programs that automate creating of apps from source code), Maven or Girdle would be to Java what Babel and WebPack are to Javascript. Apparently, every IDE used to have its own proprietary build system.

Alternatives to the two major CI and DevOps tools of Jenkins and GitHubActions include GitLab, Atlassian Bamboo, Cloudomation, Azure DevOps, and once again, Maven and Girdle. For a self-hosted CI server, GitLab CI can be used. For a cloud-based CI server, Spinnaker can be used. 

Smaller projects are better in self-hosted environment because you are billed based on the hardware. Your billing is stable - you pay for the server and whatever you do on the server doesn't affect the billing. 

Cloud-based servers are often simpler because it's all already setup for the user. You just instruct it on what to do. With regard to billing, they are also usually billed by build time which might not be best if your projects has a long one.

Pick cloud-based options for small- to medium-sized projects that doesn't have any special requirements (e.g., a graphics card to run tests). It's simpler, faster, and requires less boilerplate code. It should also be cheaper.

Larger projects (where you need more resources, like a graphics card) or in bigger companies with multiple teams and projects, self-hosted is likely the better option.