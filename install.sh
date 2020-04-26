#! /bin/bash
export VER=0.0.1; \
docker build --rm -t "harilab/pt4knee-portal:$VER" .; \
docker tag "harilab/pt4knee-portal:$VER" "harilab/pt4knee-portal:latest"; \
cd -; \
echo "=========================================================================="; \
echo  ;\
echo "RUN below command to push the image"; \
echo ;\
echo "docker push harilab/pt4knee-portal:$VER"; \
docker push harilab/pt4knee-portal:$VER;
echo ;\
echo "docker push harilab/pt4knee-portal:latest";
docker push harilab/pt4knee-portal:latest;
