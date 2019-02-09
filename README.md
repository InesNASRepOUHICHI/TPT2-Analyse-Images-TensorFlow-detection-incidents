# TPT2-Analyse-Images-TensorFlow-detection-incidents


# ANPR-Tensorflow

Ce travail est basé sur le code de Matthew Earl's [repository](https://github.com/matthewearl/deep-anpr).  
Vous pouvez suivre son [blog post](http://matthewearl.github.io/2016/05/06/cnn-anpr/) pour savoir comment developper votre besoin.


# Usage du programme:

1. `./extractbgs.py SUN397.tar.gz`: un fichier tar de 36GB à télécharger [Télécharger ici](http://vision.princeton.edu/projects/2010/SUN/SUN397.tar.gz).
   Cette étape permet d'extraire 108,634 images.

2. `./gen.py 1000`: Générer 1000 images dans `test/`. (Le dossier `test/` doit exister.) Cette étape nécessite le fichier `EUNumberPlate.ttf` qui doit etre dans le répertoire `fonts/`.

3. `./train.py`: Entrainer le modèle. Un GPU est recommandé pour cette étape. Il faudra environ 100 000 batches. Lorsque vous êtes convaincu que le programme a suffisamment appri, que vous avez appuyé sur `Ctrl + C` et le processus écrira le fichier `CPUweights.npz` et retourne.

4. `./detect.py in.jpg weights.npz out.jpg`: Détecter le numéro de la plaque d'immatriculation dans une image.

# Ce projet a ces dépendances:

* python3 
* [TensorFlow](https://tensorflow.org) (TF Version 1.0.1, cuda 8.0, cudnn 5.0)
* OpenCV (Pour installer: `pip install opencv-python`)
* NumPy


# Api-Registration-Node-Mongo

Programme d'authentification des utilisateurs de l'application.