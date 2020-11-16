{
  description = "Sizzling hot password generator";

  outputs = { self, nixpkgs }: {
    defaultPackage.x86_64-linux =
      with import nixpkgs { system = "x86_64-linux"; };
      python3Packages.buildPythonApplication {
        name = "fireword";

        meta = {
          homepage = https://channikhabra.com/fireword/;
          license = stdenv.lib.licenses.gpl3;
          platforms = stdenv.lib.platforms.unix;
        };

        src = self;

        doCheck = false;
      };
  };
}
