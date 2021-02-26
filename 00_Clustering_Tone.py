# -*- coding: utf-8 -*-
"""
Created on Fri Feb 26 15:59:21 2021

@author: lilia
"""

from sklearn.cluster import KMeans
import numpy as np
import pandas as pd

# %%
df = pd.read_csv("2 - Données//faces.csv", sep = ";")
#%%

X = df[['R','G','B']]
kmeans = KMeans(n_clusters=10, random_state=0).fit(X)
predict = kmeans.predict(X)

#%%
df['tone group'] = pd.Series(predict, index=df.index)
#%%
df.to_csv('2 - Données//faces.csv')

