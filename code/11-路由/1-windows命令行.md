1.什么是命令行

            命令行就是系统提供一个操作系统窗口, 里面可以执行命令, 操作电脑
          
2.如何打开命令

    运行中输入cmd, 执行
    
3.默认目录
    C:\user\Administrator

4.显示目录内容
    dir         (mac ls)
    
5.切换目录
    cd命令                (mac cd)
        cd dir
        cd .  一个.表示当前目录
        cd .. 切换到上级目录
                    按下TAB补全
          
    C:
    D:
    E:

6.目录的操作
    mkdir   创建目录            (mac mkdir)
    rmdir   删除目录            (mac  rm -rf 文件夹)
    
7.文件的操作
    
          创建   echo hello > 1.txt       (mac echo)
          删除  del 1.txt                 (mac  rm 文件)
          复制  copy 1.txt   1ccc.txt     (mac  cp)
          移动  move  2.txt   dir1        (mac  mv)
          

8.网络相关
    查看当前IP      ipconfig
    查看所有网卡当前IP      ipconfig     
        192.168.0.3
        
    检查网络:  第一步查看网卡是否连接网线(接口灯会亮)   
        第二步: 查看与路由是否联通
        ping 192.168.0.3
        第二步: 查看与网络是否联通      
        ping www.baidu.com