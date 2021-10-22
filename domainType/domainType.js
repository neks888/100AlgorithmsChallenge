function domainType(domains) {
  const domainType = [];

  for (let i = 0; i < domains.length; i++) {
    console.log(domains[i]);
    const domain = domains[i].split(".");
    console.log(domain);
    const lastDomain = domain[domain.length - 1];
    console.log(lastDomain);

    if (lastDomain === "com") {
      domainType.push("commercial");
    } else if (lastDomain === "info") {
      domainType.push("information");
    } else if (lastDomain === "net") {
      domainType.push("network");
    } else if (lastDomain === "org") {
      domainType.push("organization");
    }
  }

  return domainType;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
